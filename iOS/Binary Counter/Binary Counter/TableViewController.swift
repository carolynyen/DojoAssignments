//
//  ViewController.swift
//  Binary Counter
//
//  Created by Carolyn Yen on 3/20/17.
//  Copyright © 2017 frandz. All rights reserved.
//

import UIKit

class TableViewController: UITableViewController, CustomCellDelegate {
    var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    var total: Int = 0
    
    override func viewDidLoad() {
        super.viewDidLoad()
        totallabel.text = "Total: 0"
    }

    @IBOutlet weak var totallabel: UILabel!
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }
    override func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "MyCell") as! CustomCell
        let temp = (pow(10.0,nums[indexPath.row]))
        cell.number.text = String(describing: temp)
        cell.delegate = self
        return cell
    }
    
    func minuspressed(with value: Int) {
        total += value
        totallabel.text = "Total:" + String(total)
    }
    
    func pluspressed(with value: Int) {
        total += value
        totallabel.text = "Total:" + String(total)
    }
    
    override func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return nums.count
    }
    
}

