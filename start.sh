#!/bin/sh
echo "$VALIDATE_IP_CHANGED_CRON sh /app/update-ip.sh" > /etc/crontabs/root
crond
npm start