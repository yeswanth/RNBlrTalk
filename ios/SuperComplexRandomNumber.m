//
//  SuperComplexRandomNumber.m
//  rnblrtalk
//
//  Created by yash on 30/11/18.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import <React/RCTBridge.h>

@interface RCT_EXTERN_MODULE(SuperComplexRandomNumber, NSObject)

RCT_EXTERN_METHOD(getRandomNumber:(NSInteger)min max:(NSInteger)max callback:(RCTResponseSenderBlock*)callback )

@end
