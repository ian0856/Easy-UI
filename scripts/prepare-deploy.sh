#!/bin/bash
# 准备部署文件

# 脚本从 packages/ui 目录执行，所以路径是相对于该目录的
cd .histoire/dist

# 创建 .nojekyll 文件以禁用 Jekyll 处理
touch .nojekyll

# 创建 404.html 用于 SPA 路由重定向
cat > 404.html << 'EOF'
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Redirecting...</title>
    <script>
      // 获取当前路径
      const path = window.location.pathname;
      // 如果是 /Easy-UI/ 路径，重定向到 index.html
      if (path.startsWith('/Easy-UI/')) {
        window.location.replace('/Easy-UI/index.html');
      } else {
        // 否则重定向到根目录
        window.location.replace('/Easy-UI/');
      }
    </script>
  </head>
  <body>
    <p>Redirecting...</p>
  </body>
</html>
EOF

echo "✅ 部署文件准备完成"

