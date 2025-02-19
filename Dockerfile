FROM nginx:alpine

# Set working directory
WORKDIR /usr/share/nginx/html

# Remove default Nginx static assets
RUN rm -rf ./*

# Copy built Angular app from the 'dist' folder
COPY dist/IESWebApp/ ./

# Copy custom Nginx config file (optional)
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]






# Use Microsoft's official IIS image
#FROM mcr.microsoft.com/windows/nanoserver:ltsc2016

# Set up IIS
#RUN powershell -Command Add-WindowsFeature Web-Server

# Set the working directory
#WORKDIR /inetpub/wwwroot

# Copy the built Angular app to IIS wwwroot
#COPY dist/IESWebApp/ .

# Expose port 80 for HTTP
#EXPOSE 80

# Start IIS when the container runs
#CMD ["cmd", "/c", "C:\\ServiceMonitor.exe w3svc"]

