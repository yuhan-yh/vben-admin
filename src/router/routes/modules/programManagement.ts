/*
 * @Author: your name
 * @Date: 2022-09-29 15:17:43
 * @LastEditTime: 2022-09-29 15:40:59
 * @LastEditors: yuhan
 * @Description:
 * @FilePath: \vben-admin\src\router\routes\modules\programManagement.ts
 */
import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const dashboard: AppRouteModule = {
  path: '/programManagement',
  name: 'programManagement',
  component: LAYOUT,
  redirect: '/programManagement/index',
  meta: {
    hideChildrenInMenu: true,
    orderNo: 100000,
    icon: 'ion:grid-outline',
    title: t('routes.dashboard.programManagement'),
  },
  children: [
    {
      path: 'index',
      name: 'programManagement',
      component: () => import('/@/views/programManagement/index.vue'),
      meta: {
        // affix: true,
        title: t('routes.dashboard.programManagement'),
        hideMenu: true,
      },
    },
  ],
};

export default dashboard;
