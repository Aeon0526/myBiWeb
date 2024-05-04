import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import '@umijs/max';
import React from 'react';
const Footer: React.FC = () => {
  const defaultMessage = '敏而好学，不耻下问';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: '自学平台',
          title: '前端自学平台',
          href: 'https://www.w3school.com.cn/',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/ant-design/ant-design-pro',
          blankTarget: true,
        },
        {
          key: '鱼聪明 AI',
          title: '鱼聪明 AI',
          href: 'https://www.yucongming.com/model/1654785040361893889?inviteUser=1683761195028426753',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
