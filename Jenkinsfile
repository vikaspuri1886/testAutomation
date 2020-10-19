pipeline {
  agent any
  
  stages {
    stage('test') {
      steps {
        sh 'mvn clean install'
      }
    }

    stage('deploy') {
      steps {
        sh 'mvn deploy -P cloudhub'
      }
    }

  }
}
