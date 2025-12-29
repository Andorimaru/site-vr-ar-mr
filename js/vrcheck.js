        async function checkForXRSupport() {
            if (!navigator.xr) {
                console.log("Not supported.");
                return;
            }

            navigator.xr.isSessionSupported('immersive-vr').then((supported) => {
                if (supported) {
                    var enterXrBtn = document.createElement("button");
                    enterXrBtn.innerHTML = "Enter VR";
                    enterXrBtn.addEventListener("click", beginXRSession);
                    document.body.appendChild(enterXrBtn);
                } else {
                    console.log("No headset.");
                }
            });
        }
        checkForXRSupport();