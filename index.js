function CreateBankAcc(Ac_no,name,type,balance){
    this.Ac_no = Ac_no;
    this.name = name;
    this.type = type;
    this.balance = balance;
    this.deposit = function(amount){
        this.balance += amount;
    };
    this.withdraw = function(amount){
        if(amount <= this.balance){
        this.balance -= amount; 
        }
        else{
            console.log("Insufficient balance",this.balance);
        }
    };
    this.Checkbalance = function(){
        console.log(this.balance);
    };
    this.IsActive = function(){
        console.log('Yes');
    }
};

let acc1 = new CreateBankAcc(25684632857,'Arish','Saving',87545);

let acc2 = new CreateBankAcc(25684632851,'Abhi','Savings',4125);
let acc3 = new CreateBankAcc(25684632878,'Ali','Savings',8525);

//    console.log(acc1,"hsg");
    acc1.deposit(10587);
  //  console.log(acc1);
    acc1.withdraw(25551);
    //console.log(acc1);
acc2.withdraw(5880);
acc3.withdraw(500);
acc1.deposit(4880);


//acc1.Checkbalance();
//acc1.IsActive();


let accounts =[acc1,acc2,acc3];
function GetTotalBalance(accounts){
let total =0;
for(let i =0; i < accounts.length; i++){
    total += accounts[i].balance;
}
console.log('Total Balance',total);
}

GetTotalBalance(accounts);