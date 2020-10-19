pipeline {
  agent any
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