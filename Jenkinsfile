pipeline {
  agent any
  tools {maven 'maven'}
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
