pipeline {
   agent any

   stages {
      stage('Build') {
         steps {
            echo "getting project from git"
            // Get some code from a GitHub repository
            git 'https://github.com/stephentriphahn/microservice-blog-server.git'

            echo "building docker image"
	         sh "docker build -t stephentriphahn/blog-server:latest ."
            // sh "docker push stephentriphahn/blog-server:latest"
            echo "running docker image"
            sh "docker run -d -p 3000:3000 stephentriphahn/blog-server"
            // To run Maven on a Windows agent, use
            // bat "mvn -Dmaven.test.failure.ignore=true clean package"
         }
      }
   }
}
