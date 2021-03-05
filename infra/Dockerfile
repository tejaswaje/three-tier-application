FROM python:3

# Install Dependencies
RUN curl https://releases.hashicorp.com/terraform/0.13.6/terraform_0.13.6_linux_amd64.zip > terraform.zip && \ 
    unzip terraform.zip && \
    mv terraform /usr/local/bin/ && \
    rm terraform.zip && \
    curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl" && \
    mv ./kubectl /usr/local/bin/  && \
    apt-get update && \
    apt-get install -y awscli wget && \
    curl -fsSL https://apt.releases.hashicorp.com/gpg | apt-key add - && \
    curl -o aws-iam-authenticator https://amazon-eks.s3.us-west-2.amazonaws.com/1.19.6/2021-01-05/bin/linux/amd64/aws-iam-authenticator && \
    chmod +x ./aws-iam-authenticator && \
    mkdir -p $HOME/bin && cp ./aws-iam-authenticator $HOME/bin/aws-iam-authenticator && export PATH=$PATH:$HOME/bin && \
    echo 'export PATH=$PATH:$HOME/bin' >> ~/.bashrc && \
    curl -fsSL -o get_helm.sh https://raw.githubusercontent.com/helm/helm/master/scripts/get-helm-3 && \
    chmod 700 get_helm.sh && \
    chmod 700 /usr/local/bin/kubectl && \
    ./get_helm.sh
ADD . .


ENV KUBECONFIG="${PWD}/kubeconfig_my-cluster"