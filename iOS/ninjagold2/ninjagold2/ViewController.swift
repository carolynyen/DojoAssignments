//
//  ViewController.swift
//  ninjagold2
//
//  Created by Carolyn Yen on 3/8/17.
//  Copyright © 2017 Carolyn Yen. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    var score = 0
    var points = 0
    @IBOutlet weak var casinolabel: UILabel!
    @IBOutlet weak var houselabel: UILabel!
    @IBOutlet weak var cavelabel: UILabel!
    @IBOutlet weak var farmlabel: UILabel!
    @IBOutlet weak var scorelabel: UILabel!
    
    @IBAction func buildingpressed(_ sender: UIButton) {
        if sender.tag == 0 {
            points = Int(arc4random_uniform(11) + 10)
            hidelabels()
            farmlabel.text = "You earned \(points) points"
            farmlabel.isHidden = false
            score += points
            scorelabel.text = String(score)
        }
        else if sender.tag == 1 {
            points = Int(arc4random_uniform(6) + 5)
            hidelabels()
            cavelabel.text = "You earned \(points) points"
            cavelabel.isHidden = false
            score += points
            scorelabel.text = String(score)
        }
        else if sender.tag == 2 {
            points = Int(arc4random_uniform(4) + 2)
            hidelabels()
            houselabel.text = "You earned \(points) points"
            houselabel.isHidden = false
            score += points
            scorelabel.text = String(score)
        }
        else {
            points = Int(arc4random_uniform(51))
            hidelabels()
            let gamble = arc4random_uniform(2)
            if gamble == 0 {
                casinolabel.text = "You earned \(points) points"
                score += points
            }
            else {
                casinolabel.text = "You lost \(points) points"
                score -= points
            }
            casinolabel.isHidden = false
            scorelabel.text = String(score)
        }

    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        scorelabel.text = String(score)
        hidelabels()
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        
    }

    @IBAction func resetbutton(_ sender: UIButton) {
        score = 0
        scorelabel.text = String(score)
        hidelabels()
    }
    func hidelabels(){
        farmlabel.isHidden = true
        cavelabel.isHidden = true
        houselabel.isHidden = true
        casinolabel.isHidden = true
    }

}

