import { Settings as LayoutSettings } from '@ant-design/pro-layout';

/**
 * 页面配置
 */
const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light',
  primaryColor: '#1890ff',
  layout: 'side',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  title: '',
  pwa: false,
  footerRender: false,
  logo: 'https://nacos.io/img/nacos_colorful.png',
  iconfontUrl: '',
};

export default Settings;
