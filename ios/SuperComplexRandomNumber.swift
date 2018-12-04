//
//  SuperComplexRandomNumber.swift
//  rnblrtalk
//
//  Created by yash on 30/11/18.
//  Copyright © 2018 Facebook. All rights reserved.
//

import Foundation
@objc(SuperComplexRandomNumber)
class SuperComplexRandomNumber: NSObject {

  @objc func getRandomNumber(_ min:Int, max:Int, callback: RCTResponseSenderBlock) -> Void{
    let randomNumber = Int(arc4random_uniform(UInt32(max - min)) + 1);
    callback([randomNumber]);
  }
}
