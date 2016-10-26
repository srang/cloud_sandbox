# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure(2) do |config|
	# https://atlas.hashicorp.com/search.
	# not applicable for docker
	config.ssh.insert_key = false
	config.vm.define "vagrant1" do | vagrant1 |
		vagrant1.vm.box = "centos/7"
		vagrant1.vm.box_check_update = false
		vagrant1.vm.network "forwarded_port", guest: 81, host: 8080
		vagrant1.vm.network "private_network", type: "dhcp", virtualbox__intnet: true
		vagrant1.vm.hostname = "vagrant1.local"
	end
	config.vm.define "vagrant2" do | vagrant2 |
		vagrant2.vm.box = "centos/7"
		vagrant2.vm.box_check_update = false
		vagrant2.vm.network "forwarded_port", guest: 81, host: 8081
		vagrant2.vm.network "private_network", type: "dhcp", virtualbox__intnet: true
		vagrant2.vm.hostname = "vagrant2.local"
	end
	config.vm.define "vagrant3" do | vagrant3 |
		vagrant3.vm.box = "centos/7"
		vagrant3.vm.box_check_update = false
		vagrant3.vm.network "forwarded_port", guest: 81, host: 8082
		vagrant3.vm.network "private_network", type: "dhcp", virtualbox__intnet: true
		vagrant3.vm.hostname = "vagrant3.local"
	end
	#config.vm.provider "docker" do |d|
	#  d.image = "centos:7"
	#end
end
