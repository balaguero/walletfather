## Run PM2 in startup
pm2 startup
pm2 start ./bin/www -n yamcha-guard-backend-prod
pm2 save

## Setting up amazon web services credentials
1- Make sure we have a directory created ~/.aws
2- run `nano credentials`
3- paste the following credentials

[default]
aws_access_key_id = <INSERT AWS ACCESS KEY ID>
aws_secret_access_key = <INSERT AWS_SECRET_ACCESS_KEY>

## Install nginx
https://www.tecmint.com/nginx-as-reverse-proxy-for-nodejs-app/

/etc/nginx/sites-available/default

server {
    listen 80;
    server_name localhost;

    location / {
        proxy_set_header   X-Forwarded-For $remote_addr;
        proxy_set_header   Host $http_host;
        proxy_pass         http://localhost:3000;
    }
}

## Connecting via SSH
1- Make sure you have the PEM key on the ~/.ssh folder of your local machine
2- cd ~/.ssh
3- Run:
ssh -i ssh-yamcha-guard-1.pem ubuntu@ec2-3-83-129-36.compute-1.amazonaws.com


## Raspberry setup

### Nodejs setup
sudo apt-get install
wait 10m
sudo apt-get upgrade
sudo apt-get install nodejs
sudo apt-get install npm
sudo apt-get install net-tools

### Ubuntu GUI (gnome)
#### Disable GUI
sudo systemctl set-default multi-user
#### Enable GUI
sudo systemctl set-default graphical
#### Start GUI manually
sudo systemctl start gdm3

### SSH
ssh ubuntu@unmineropichi.001www.com -p 8091