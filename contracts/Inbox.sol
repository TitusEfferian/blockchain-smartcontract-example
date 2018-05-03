pragma solidity ^0.4.17;//import vrsion of solidity

contract Inbox{
    string public message; //store variable
    
    function Inbox(string initialMessage) public {
        message = initialMessage;
    }
    function setMessage(string newMessage) public {
        message = newMessage;
    }
    
}