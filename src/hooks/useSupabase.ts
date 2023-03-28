import {
  useUser,
  useSupabaseClient,
  Session,
  useSession,
} from '@supabase/auth-helpers-react';
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

  useEffect(() => {
    if (!session) return;
    getProfile();
  }, [session]);

  async function getProfile() {
    try {
      setLoading(true);
      if (!user) throw new Error('No user');

      let { data, error, status } = await supabase
        .from('profiles')
        .select(`username, website, avatar_url`)
        .eq('id', user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setUsername(data.username);
        setWebsite(data.website);
        setAvatarUrl(data.avatar_url);
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

      let { error } = await supabase.from('profiles').upsert(updates);
      if (error) throw error;
      alert('Profile updated!');
    } catch (error) {
      alert('Error updating the data!');
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return {
    loading,
    username,
    website,
    avatar_url,
    session,
  };
};

export default useSupabase;
