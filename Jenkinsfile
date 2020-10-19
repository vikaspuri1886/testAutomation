pipeline {
  agent none
  stages {
    stage('initialize') {
      steps {
        echo 'Intializing the pipeline'
      }
    }

    stage('paths') {
      steps {
        sh '''echo PATH = ${PATH}
echo M2_HOME = ${M2_HOME}'''
      }
    }

  }
}