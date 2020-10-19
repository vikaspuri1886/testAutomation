pipeline {
  agent any
  tools {
        maven 'apache-maven-3.3.9' 
    }  
  stages {
    stage('test') {
      steps {
        sh 'clean install'
      }
    }

    stage('deploy') {
      steps {
        sh 'mvn deploy -P cloudhub'
      }
    }

  }
}
