//
//  TableViewController.swift
//  ToDoList App
//
//  Created by Carolyn Yen on 3/20/17.
//  Copyright © 2017 frandz. All rights reserved.
//

import Foundation
import UIKit

class TableViewController: UITableViewController, AddItemControllerDelegate{
    var items = [[String]]()
    
    @IBAction func unwind(_ sender: UIStoryboardSegue){
        
    }
    override func viewDidLoad() {
        super.viewDidLoad()
        tableView.reloadData()
    }
    
    func additemcell(title: String, description: String, date: String) {
        items.append([title, description, date])
        tableView.reloadData()
    }
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }
    
    override func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "MyCell") as! CustomCell
        cell.titlelabel.text = items[indexPath.row][0]
        cell.descriptlabel.text = items[indexPath.row][1]
        cell.datelabel.text = items[indexPath.row][2]
        return cell
    }
    
    override func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return items.count
    }
    
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        let destination = segue.destination as! AddItemController
        destination.delegate = self
    }
    
}
