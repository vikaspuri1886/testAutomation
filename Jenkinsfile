pipeline {
  agent {
    docker {
      image 'maven:3.6.3-jdk-11'
    }

  }
  stages {
    stage('initialize') {
      steps {
        echo 'Intializing the pipeline'
      }
    }

    stage('Build') {
      steps {
        sh 'mvn -B -DskipTests clean package'
      }
    }

    stage('deployToCloud') {
      steps {
        sh 'mvn deploy -P cloudhub'
      }
    }

  }
}