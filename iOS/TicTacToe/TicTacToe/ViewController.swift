//
//  ViewController.swift
//  TicTacToe
//
//  Created by Carolyn Yen on 3/8/17.
//  Copyright © 2017 Carolyn Yen. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    var turn = 0
    var map = ["1":0, "2":0, "3":0, "4":0, "5":0, "6":0, "7":0, "8":0, "9":0]
    var winner = 0
    
    @IBOutlet var squares: [UIButton]!
    @IBOutlet weak var winnerlabel: UILabel!
    override func viewDidLoad() {
        super.viewDidLoad()
        winnerlabel.isHidden = true
    }

    @IBAction func pushbutton(_ sender: UIButton) {
        var player = 0
        if map[String(sender.tag)] == 0 {
            turn += 1
        }
        if turn % 2 == 0 && map[String(sender.tag)] == 0 {
            sender.backgroundColor = UIColor.blue
            map[String(sender.tag)] = 2
            player = 2
        }
        else if turn % 2 != 0 && map[String(sender.tag)] == 0{
            sender.backgroundColor = UIColor.red
            map[String(sender.tag)] = 1
            player = 1
        }
        checkwin(square: sender.tag, player: player)
    }
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }
    func checkwin(square: Int, player: Int){
        winnerlabel.isHidden = true
        if square == 1 {
            if map["2"] == player && map["3"] == player{
                winner = player
            }
            if map["4"] == player && map["7"] == player{
                winner = player
            }
            if map["5"] == player && map["9"] == player{
                winner = player
            }
        }
        if square == 2 {
            if map["5"] == player && map["8"] == player{
                winner = player
            }
            if map["1"] == player && map["3"] == player{
                winner = player
            }
        }
        if square == 3 {
            if map["1"] == player && map["2"] == player{
                winner = player
            }
            if map["6"] == player && map["9"] == player{
                winner = player
            }
            if map["5"] == player && map["7"] == player{
                winner = player
            }
        }
        if square == 4 {
            if map["1"] == player && map["7"] == player{
                winner = player
            }
            if map["5"] == player && map["6"] == player{
                winner = player
            }
        }
        if square == 5 {
            if map["2"] == player && map["8"] == player{
                winner = player
            }
            if map["4"] == player && map["6"] == player{
                winner = player
            }
            if map["1"] == player && map["9"] == player{
                winner = player
            }
            if map["3"] == player && map["7"] == player{
                winner = player
            }
        }
        if square == 6 {
            if map["3"] == player && map["9"] == player{
                winner = player
            }
            if map["4"] == player && map["5"] == player{
                winner = player
            }
        }
        if square == 7 {
            if map["1"] == player && map["4"] == player{
                winner = player
            }
            if map["8"] == player && map["9"] == player{
                winner = player
            }
            if map["3"] == player && map["5"] == player{
                winner = player
            }
        }
        if square == 8 {
            if map["2"] == player && map["7"] == player{
                winner = player
            }
            if map["7"] == player && map["9"] == player{
                winner = player
            }
        }
        if square == 9 {
            if map["1"] == player && map["5"] == player{
                winner = player
            }
            if map["3"] == player && map["6"] == player{
                winner = player
            }
            if map["7"] == player && map["8"] == player{
                winner = player
            }
        }
        if winner != 0{
            winnerlabel.text = "Player \(winner) won!!!"
            winnerlabel.isHidden = false
            for key in map.keys {
                map[key] = winner
            }
        }
        else {
            var status = true
            for value in map.values {
                if value == 0 {
                    status = false
                }
            }
            if status == true {
                winnerlabel.text = "Nobody wins. boohoo."
                winnerlabel.isHidden = false
            }
        }
    }

    @IBAction func resetbutton(_ sender: UIButton) {
        turn = 0
        winner = 0
        for i in squares {
            i.backgroundColor = UIColor.cyan
        }
        for key in map.keys {
            map[key] = 0
        }
        winnerlabel.isHidden = true
    }
}

