import {
  useUser,
  useSupabaseClient,
  Session,
  useSession,
} from '@supabase/auth-helpers-react';
import { DataHexString } from 'ethers/types/utils/data';
import React, { useEffect, useState } from 'react';

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          username: string | null;
          website: string | null;
          avatar_url: string | null;
        }; // The data expected to be returned from a "select" statement.
        // Insert: {}; // The data expected passed to an "insert" statement.
        // Update: {}; // The data expected passed to an "update" statement.
      };
    };
  };
}

export type Profiles = Database['public']['Tables']['profiles']['Row'];

const useSupabase = () => {
  const session = useSession() as Session;
  const supabase = useSupabaseClient<Database>();
  const user = useUser();
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState<Profiles['username']>(null);
  const [website, setWebsite] = useState<Profiles['website']>(null);
  const [avatar_url, setAvatarUrl] = useState<Profiles['avatar_url']>(null);
  const [dataUpdate, setDataUpdate] = useState<
    DataHexString | string | undefined | any
  >();

  useEffect(() => {
    if (!session) return;
    setDataUpdate(user?.updated_at);
    getProfile();
  }, [session]);

  async function getProfile() {
    try {
      setLoading(true);
      if (!user) throw new Error('No user');

      let { data, error, status } = await supabase
        .from('profiles')
        .select(`username, website, avatar_url, updated_at`)
        .eq('id', user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setUsername(data.username);
        setWebsite(data.website);
        setAvatarUrl(data.avatar_url);
        setDataUpdate(data.updated_at);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function updateProfile({
    username,
    website,
    avatar_url,
  }: {
    username: Profiles['username'];
    website: Profiles['website'];
    avatar_url: Profiles['avatar_url'];
  }) {
    try {
      setLoading(true);
      if (!user) throw new Error('No user');

      const updates = {
        id: user.id,
        username,
        website,
        avatar_url,
        updated_at: new Date().toISOString(),
      };

      const dateUpdate = new Date(dataUpdate.toString()).getTime() + 30;
      const dateNow = new Date().getTime();

      console.log(dateUpdate - dateNow);
      if (dateUpdate - dateNow < -300000) {
        let { error } = await supabase.from('profiles').upsert(updates);
        if (error) throw error;
        alert('Profile updated!');
      } else {
        alert('Wait for 15 minutes to update profile');
      }
    } catch (error) {
      alert('Error updating the data!');
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return {
    supabase,
    loading,
    username,
    website,
    avatar_url,
    session,
    setUsername,
    setWebsite,
    updateProfile,
    dataUpdate,
  };
};

export default useSupabase;
