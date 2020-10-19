pipeline {
  agent any
  
  stages {
    stage('test') {
      steps {
        def mvn_version = ''
    
        withEnv( ["PATH+MAVEN=${tool mvn_version}/bin"] )  {
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
