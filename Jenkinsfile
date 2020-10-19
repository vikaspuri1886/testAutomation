pipeline {
  agent {
    docker {
      image 'maven:3.6.3-jdk-11'
      args '-v /root/.m2:/root/.m2'
    }

  }
  stages {
    stage('initialize') {
      steps {
        echo 'Intializing the pipeline'
      }
    }

  }
}