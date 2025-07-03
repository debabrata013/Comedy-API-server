pipeline {
    agent any;
    stages{
        stage("clone code from github"){
            steps{
                git branch: 'main', url: 'https://github.com/debabrata013/Comedy-API-server.git'
            }
        }
        stage("build an image"){
            steps{
                sh "docker build -t comedy-server-app ."
            }
        }
        stage("push image on dockerhub"){
            steps{
                withCredentials([usernamePassword(
                    credentialsId: "dockerhubcreds",
                    usernameVariable: "dockerHubUser",
                    passwordVariable: "dockerHubPass"
                )]){
                    sh "docker login -u ${env.dockerHubUser} -p ${env.dockerHubPass}"
                    sh "docker tag comedy-server-app ${env.dockerHubUser}/comedy-server-app:latest"
                    sh "docker push ${env.dockerHubUser}/comedy-server-app:latest"
                }
            }
       }
       stage("deploy code"){
           steps{
               sh "docker compose up -d"
           }
       }
    }
    post{
        success{
            script{
                withCredentials([usernamePassword(
                    credentialsId: "emailcreds",
                    usernameVariable: "EMAIL_USER",
                    passwordVariable: "EMAIL_PASS"
                 )]){
                     emailext(
                         from: "${EMAIL_USER}",
                         to: "${EMAIL_USER}",
                         subject: 'Build Successful',
                         body: 'The build completed successfully.'
                      )
                 }
             }
        }
        failure{
            script{
                withCredentials([usernamePassword(
                    credentialsId: "emailcreds",
                    usernameVariable: "EMAIL_USER",
                    passwordVariable: "EMAIL_PASS"
                 )]){
                     emailext(
                         from: "${EMAIL_USER}",
                         to: "${EMAIL_USER}",
                         subject: 'Build failed',
                         body: 'The build failed.'
                      )
                 }
             }
        }
    }
}
