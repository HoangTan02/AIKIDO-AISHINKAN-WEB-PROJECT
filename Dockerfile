# Sử dụng nginx làm base image
FROM nginx:alpine

# Copy index.html vào thư mục chính của nginx
COPY index.html /usr/share/nginx/html/index.html

# Copy thư mục views (chứa các file CSS và các HTML khác)
COPY views /usr/share/nginx/html/views

# Copy thư mục config (chứa các file JavaScript)
COPY config /usr/share/nginx/html/config

# Expose cổng 80
EXPOSE 80

# Chạy nginx
CMD ["nginx", "-g", "daemon off;"]
