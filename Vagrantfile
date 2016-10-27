# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure(2) do |config|
	# https://atlas.hashicorp.com/search.
	# not applicable for docker
	config.ssh.insert_key = false
	config.ssh.forward_agent = true
	config.vm.define "vagrant1" do | vagrant1 |
		vagrant1.vm.box = "centos/7"
		vagrant1.vm.box_check_update = false
		vagrant1.vm.network "forwarded_port", guest: 81, host: 8083
		vagrant1.vm.network "private_network", ip: "172.28.128.10"
		vagrant1.vm.hostname = "vagrant1.local"
	end
	config.vm.define "vagrant2" do | vagrant2 |
		vagrant2.vm.box = "centos/7"
		vagrant2.vm.box_check_update = false
		vagrant2.vm.network "forwarded_port", guest: 81, host: 8081
		vagrant2.vm.network "private_network", ip: "172.28.128.11"
		vagrant2.vm.hostname = "vagrant2.local"
	end
	config.vm.define "vagrant3" do | vagrant3 |
		vagrant3.vm.box = "centos/7"
		vagrant3.vm.box_check_update = false
		vagrant3.vm.network "forwarded_port", guest: 81, host: 8082
		vagrant3.vm.network "private_network", ip: "172.28.128.12"
		vagrant3.vm.hostname = "vagrant3.local"
	end
	config.vm.define "master" do | master |
		master.vm.box = "centos/7"
		master.vm.box_check_update = false
		master.vm.network "private_network", ip: "172.28.128.2"
		master.vm.hostname = "master.local"
	end
	#config.vm.provider "docker" do |d|
	#  d.image = "centos:7"
	#end
end
