// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract TokenTransfer {
    event TransferExecuted(address indexed from, address indexed to, uint256 amount);

    function transferToken(
        address token,
        address to,
        uint256 amount
    ) external {
        require(to != address(0), "Invalid recipient");

        bool success = IERC20(token).transferFrom(msg.sender, to, amount);
        require(success, "Token transfer failed");

        emit TransferExecuted(msg.sender, to, amount); // Emit event saat transfer berhasil
    }
}

interface IERC20 {
    function transferFrom(
        address sender,
        address recipient,
        uint256 amount
    ) external returns (bool);
}
