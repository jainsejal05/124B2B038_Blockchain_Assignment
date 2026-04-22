// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/**
 * @title UserDataStore
 * @dev Simple contract to store and retrieve a name + message on-chain
 */
contract UserDataStore {
    string private storedName;
    string private storedMessage;

    // Fired every time setData is called
    event DataStored(string name, string message, address indexed sender);

    /**
     * @notice Store a name and message on the blockchain
     * @param _name   The user's name
     * @param _message The user's message
     */
    function setData(string memory _name, string memory _message) public {
        require(bytes(_name).length > 0, "Name cannot be empty");
        require(bytes(_message).length > 0, "Message cannot be empty");

        storedName    = _name;
        storedMessage = _message;

        emit DataStored(_name, _message, msg.sender);
    }

    /**
     * @notice Retrieve the stored name and message
     * @return name    The stored name
     * @return message The stored message
     */
    function getData() public view returns (string memory name, string memory message) {
        return (storedName, storedMessage);
    }
}
