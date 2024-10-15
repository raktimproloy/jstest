const body = document.querySelector('body')

const chatDesign = `
    <button id="chatButton" onclick={handleChatOpen()} style="background-color: #4CAF50; color: white; padding: 10px 15px; border: none; border-radius: 5px; margin-left: 10px; cursor: pointer; position: fixed; bottom: 5%; right: 5%;">Chat Box</button>
    <div id="chatBox" style="width: 400px; background-color: white; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.1); display: flex; flex-direction: column; position: fixed;  bottom: 10%; right: 5%; display:none">

        <!-- Chat Header -->
        <div style="background-color: #4CAF50; color: white; padding: 15px; border-top-left-radius: 10px; border-top-right-radius: 10px;">
            <h3 style="margin: 0;">Chat Room</h3>
        </div>

        <!-- Chat Messages -->
        <div id="chat-box" style="flex-grow: 1; padding: 15px; overflow-y: auto; background-color: #f9f9f9;">
            <!-- Message from others -->
            <div style="margin-bottom: 10px;">
                <div style="background-color: #e0e0e0; padding: 10px; border-radius: 10px; display: inline-block; max-width: 80%;">
                    Hello! How are you doing?
                </div>
                <span style="font-size: 12px; color: gray;">10:01 AM</span>
            </div>

            <!-- Message from user -->
            <div style="text-align: right; margin-bottom: 10px;">
                <div style="background-color: #4CAF50; color: white; padding: 10px; border-radius: 10px; display: inline-block; max-width: 80%;">
                    I'm doing well, thank you!
                </div>
                <span style="font-size: 12px; color: gray;">10:02 AM</span>
            </div>
        </div>

        <!-- Chat Input -->
        <div style="display: flex; padding: 10px; border-top: 1px solid #ddd; background-color: #fff; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px;">
            <input type="text" placeholder="Type a message" style="flex-grow: 1; padding: 10px; border: 1px solid #ddd; border-radius: 5px; outline: none;">
            <button style="background-color: #4CAF50; color: white; padding: 10px 15px; border: none; border-radius: 5px; margin-left: 10px; cursor: pointer;">Send</button>
        </div>
    </div>
`

body.innerHTML = chatDesign

const chatBox = document.getElementById("chatBox")
const chatButton = document.getElementById("chatButton")
const handleChatOpen = () => {
    const displayValue = document.getElementById('chatBox').style.display;
    if(displayValue === "none"){
        chatBox.style.display = "block"
    }else{
        chatBox.style.display = "none"
    }
}