import { compareString } from './str';

export default ({ app: { $auth } }, inject) => {
  inject('userCan', (permissions, requireAll = false) => {
    if (Array.isArray(permissions)) {
      if (permissions.length === 0) {
        return true;
      }
    }

    const userPermissions = getUserPermissions($auth.user);

    if (requireAll) {
      return permissions.every((permission) => userHasPermission(permission, userPermissions));
    } else {
      return permissions.some((permission) => userHasPermission(permission, userPermissions));
    }
  });

  inject('role', {
    current() {
      return $auth.user.role;
    },
  });
};

/**
 *
 * @param user $auth.user
 * @returns {*[]|[]|Permissions}
 */
function getUserPermissions(user) {
  if (user && user.permissions) return user.permissions;
  else return [];
}

function userHasPermission(permission, userPermissions) {
  return userPermissions.some((userPermission) => compareString(permission, userPermission));
}

/**
 *  Can be used from context: https://nuxtjs.org/guide/plugins/#combined-inject
 *
 *  To check permissions on page-level:
 *  asyncData({ app: { $userCan }, redirect }) {
 *    if (!$userCan(['users.index'])) redirect('/');
 *  }
 */
