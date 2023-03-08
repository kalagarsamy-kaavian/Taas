pipeline {
    agent any
    stages {
      stage('Build') {
        steps {
          sh 'npm install'
          sh 'npm run build'
        }
      }
      stage('Deploy') {
        steps {
          sh 'npm install'
          sh 'npm run build'
          sh 'docker build -t my-react-app .'
          sh 'docker run -d -p 8080:80 my-react-app'
        }
      }
    }
  }