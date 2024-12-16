// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MockERC20 is ERC20 {
    uint8 private _decimals;

    constructor(
        string memory name,
        string memory symbol,
        uint256 initialSupply
    ) ERC20(name, symbol) {
        _decimals = 18; // Default decimals
        _mint(msg.sender, initialSupply);
    }

    // Override decimals function
    function decimals() public view override returns (uint8) {
        return _decimals;
    }

    // Fungsi mint untuk menambahkan token ke alamat tertentu
    function mint(address to, uint256 amount) public {
        _mint(to, amount);
    }
}
