//
//  ViewController.swift
//  Beastlist
//
//  Created by Carolyn Yen on 3/14/17.
//  Copyright © 2017 frandz. All rights reserved.
//

import UIKit

class ViewController: UIViewController, UITableViewDataSource, UITableViewDelegate {
    var tasks = ["something cool", "very cool", "extremely cool"]
    
    @IBOutlet weak var textfield: UITextField!
    @IBOutlet weak var tableView: UITableView!
    
    @IBAction func pressedbeast(_ sender: UIButton) {
        if textfield.text!.characters.count == 0 {
            print("none")
            return
        }
        else {
            tasks.append(textfield.text!)
            tableView.reloadData()
            textfield.text = nil
        }
    }
    override func viewDidLoad() {
        super.viewDidLoad()
        tableView.dataSource = self
        tableView.delegate = self
    }
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return tasks.count
    }
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "MyCell", for: indexPath)
        cell.textLabel?.text = tasks[indexPath.row]
        return cell
    }
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        print("Section: \(indexPath.section) and Row: \(indexPath.row)")
        tasks.remove(at: indexPath.row)
        tableView.reloadData()
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }
}


