# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure(2) do |config|
	# https://atlas.hashicorp.com/search.
	# not applicable for docker
	config.vm.box = "centos/7"
	config.vm.box_check_update = false
	config.vm.network "forwarded_port", guest: 81, host: 8080
	config.vm.network "forwarded_port", guest: 443, host: 8443
	#config.vm.provider "docker" do |d|
	#  d.image = "centos:7"
	#end
end
