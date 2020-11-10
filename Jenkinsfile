pipeline {
  agent any
  stages {
    stage('upload to nexus') {
      steps {
        script {
          echo "hello";

          pom = readMavenPom file: "pom.xml";

          filesbyGlob = findFiles(glob: "target/*.jar");

          echo "${filesbyGlob[0].path}";

          nexusArtifactUploader(artifacts: [[artifactId: pom.artifactId, classifier: '', file: filesbyGlob[0].path, type: 'jar']], credentialsId: 'nexus', groupId: pom.groupId, nexusUrl: 'localhost:8081', nexusVersion: 'nexus3', protocol: 'http', repository: 'com.testnjc', version: ${currentBuild.number})
        }

      }
    }

  }
  tools {
    maven 'Maven'
  }
}