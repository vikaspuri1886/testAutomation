pipeline {
  agent any
  stages {
    stage('Start') {
      steps {
        echo 'Starting the pipeline'
      }
    }

    stage('Build') {
      steps {
        sh 'mvn -f pom.xml clean install'
      }
    }

    stage('Deploy') {
      steps {
        sh 'mvn -f pom.xml package'
      }
    }

    stage('IntegerationTesting') {
      steps {
        sh 'mvn -f pom.xml failsafe:integration-test'
      }
    }

    stage('Email') {
      steps {
        emailext(subject: 'Testing Reports for $PROJECT_NAME - Build # $BUILD_NUMBER - $BUILD_STATUS!', body: 'Please find the functional testing reports:', attachmentsPattern: 'target/cucumber-reports/report.html', from: 'vikaspuri123@gmail.com', mimeType: 'text/html', to: 'vikas_mullana@yahoo.com')
      }
    }

  }
  tools {
    maven 'MAVEN_HOME'
  }
}