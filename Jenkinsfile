pipeline {
   agent any

   stages {
      stage('Build') {
         steps {
            echo "getting project from git"
            // Get some code from a GitHub repository
            git 'https://github.com/stephentriphahn/microservice-blog-server.git'
	    echo "Jenkinsfile test confirm"
            // Run Maven on a Unix agent.
            //sh "npm install"
            //sh "npm build"
            //sh "npm test"

            // To run Maven on a Windows agent, use
            // bat "mvn -Dmaven.test.failure.ignore=true clean package"
         }
      }
   }
}
