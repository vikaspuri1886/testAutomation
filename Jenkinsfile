pipeline {
  agent any
  tools {
        maven 'apache-maven-3.6.3' 
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
