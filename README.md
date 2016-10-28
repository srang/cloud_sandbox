# cloud_sandbox
Sandbox for configuring apps with ansible

```
$ vagrant up # creates boxes
$ ./site.yml # configures master and sets up routing between boxes
$ ssh -A vagrant@master
$ cd /opt/ansible
$ ./local.yml # sets up app and web servers
