export const idlFactory = ({ IDL }) => {
  const Profile = IDL.Record({
    'profilePicUrl' : IDL.Text,
    'username' : IDL.Text,
    'email' : IDL.Text,
  });
  return IDL.Service({
    'getLoggedInUser' : IDL.Func([], [IDL.Text], []),
    'getLoginStatus' : IDL.Func([], [IDL.Bool], []),
    'getProfile' : IDL.Func([], [Profile], []),
    'login' : IDL.Func([IDL.Text], [IDL.Text], []),
    'logout' : IDL.Func([], [IDL.Text], []),
    'updateProfile' : IDL.Func([IDL.Text, IDL.Text, IDL.Text], [IDL.Text], []),
  });
};
export const init = ({ IDL }) => { return []; };
