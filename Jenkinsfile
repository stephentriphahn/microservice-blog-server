pipeline {
   agent any

   stages {
      stage('Build') {
         steps {
            echo "getting project from git"
            // Get some code from a GitHub repository
            git 'https://github.com/stephentriphahn/microservice-blog-server.git'
	         sh "pwd"
            // To run Maven on a Windows agent, use
            // bat "mvn -Dmaven.test.failure.ignore=true clean package"
         }
      }
   }
}
