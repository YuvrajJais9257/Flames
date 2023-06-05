document.getElementById('loveCalculatorForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
      
        // Get user and crush names
        var user = document.getElementById('user').value;
        var crush = document.getElementById('crush').value;
      
        // Calculate love score
        var loveScore = calculateLoveScore(user, crush);
      
        // Display result message
        var message = getMessage(loveScore);
        document.getElementById('result').innerHTML = message;
      
        // Delay in milliseconds before redirecting
        var delayInMilliseconds = 5000; // 5 seconds
      
        // Function to redirect to the thank you page
        function redirectToThankYou() {
          window.location.href = "thankyou.html";
        }
      
        // Set a timeout to trigger the redirect
        setTimeout(redirectToThankYou, delayInMilliseconds);
      });
      
      function calculateLoveScore(user, crush) {
        var combinedNames = (user + crush).toLowerCase();
        var loveScore = 0;
      
        // Calculate love score based on characters in the names
        for (var i = 0; i < combinedNames.length; i++) {
          loveScore += combinedNames.charCodeAt(i);
        }
      
        return loveScore % 101; // Keep the love score within 0-100
      }
      
      function getMessage(loveScore) {
        var message = '';
      
        if (loveScore >= 80) {
          message = 'Wow! You have an incredible connection!';
        } else if (loveScore >= 60) {
          message = 'You have a good chance. Go for it!';
        } else if (loveScore >= 40) {
          message = 'Hmm... There might be something there.';
        } else {
          message = 'Not much love potential. Keep searching!';
        }
      
        return message;
      }
      