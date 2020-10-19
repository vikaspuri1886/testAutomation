pipeline {
  agent any
  
  stages {
    stage('test') {
      steps {
        withMaven {
          sh 'mvn clean install'
        }
      }
    }

    stage('deploy') {
      steps {
        sh 'mvn deploy -P cloudhub'
      }
    }

  }
}
