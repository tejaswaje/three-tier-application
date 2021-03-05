#!/bin/bash

# Please make sure you have 
# terraform -> Terraform v0.13.4
# awscli -> aws-cli/1.16.113 with proper credentials 
# kubectl -> Client Version: version.Info{Major:"1", Minor:"20", GitVersion:"v1.20.4", GitCommit:"e87da0bd6e03ec3fea7933c4b5263d151aafd07c", GitTreeState:"clean", BuildDate:"2021-02-18T16:12:00Z", GoVersion:"go1.15.8", Compiler:"gc", Platform:"linux/amd64"}

# Initialize a working directory containing Terraform configuration files.
echo "terraform initializing..."
terraform init

# Run terraform scripts
echo "Running terraform scripts..."
terraform apply -auto-approve

# Configure kubectl
echo "Configuring kubectl..."
aws eks --region $(terraform output region) update-kubeconfig --name $(terraform output cluster_name)
