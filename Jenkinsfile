pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        withEnv(overrides: ["JAVA_HOME=${ tool 'JDK 8' }", "PATH+MAVEN=${tool 'MAVEN_HOME'}/bin:${env.JAVA_HOME}/bin"]) {
          sh 'mvn -f pom.xml clean install package'
        }

      }
    }

    stage('upload to nexus') {
      steps {
        script {
          pom = readMavenPom file: "pom.xml";

          filesbyGlob = findFiles(glob: "target/*${pom.packaging}");
          echo "${filesbyGlob}"


          nexusArtifactUploader(artifacts: [[artifactId: pom.artifactId, classifier: '', file: filesbyGlob[0].path, type: 'jar']], credentialsId: 'nexus', groupId: pom.groupId, nexusUrl: 'localhost:8081', nexusVersion: 'nexus3', protocol: 'http', repository: 'com.njclabs', version: pom.version)
        }

      }
    }

  }
  tools {
    maven 'MAVEN_HOME'
  }
}