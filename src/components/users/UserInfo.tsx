import useSupabase from '@/hooks/useSupabase';
import { Session } from '@supabase/supabase-js';

export default function UserInfo({ session }: { session: Session }) {
  const { loading, username, website, avatar_url } = useSupabase();

  return (
    <div className="form-widget">
      <div>
        <label htmlFor="email">Email</label>
        <p>{session?.user.email}</p>
        {/* <input id="email" type="text" value={session?.user.email} disabled /> */}
      </div>
      <div>
        <label htmlFor="username">Username</label>
        <p>{username}</p>
        {/* <input
          id="username"
          type="text"
          value={username || ''}
          onChange={(e) => setUsername(e.target.value)}
        /> */}
      </div>
      <div>
        <label htmlFor="website">Website</label>
        <p>{website}</p>
        {/* <input
          id="website"
          type="website"
          value={website || ''}
          onChange={(e) => setWebsite(e.target.value)}
        /> */}
      </div>

      {/* <div>
        <button
          className="buttonSB primary block"
          onClick={() => updateProfile({ username, website, avatar_url })}
          disabled={loading}
        >
          {loading ? 'Loading ...' : 'Update'}
        </button>
      </div> */}
    </div>
  );
}
