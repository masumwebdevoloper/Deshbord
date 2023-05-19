
    
  
    document.getElementById('deposit').addEventListener('click',function(){
      const depositAmmount = document.getElementById('totalDeposit');
      const newDeposit = depositAmmount.value;
      const newAmmount = parseFloat(newDeposit);

      const Deposittotal = document.getElementById('tutalDeposit');
      const previustutalDeposit = tutalDeposit.innerText;
      const previustutalDepositammount = parseFloat(previustutalDeposit);
      const newdepositammount =previustutalDepositammount + newAmmount;
      Deposittotal.innerText = newdepositammount;
      // add balance

      const balancetotal = document.getElementById('tutaBalance');
      const previusbalancetotal = balancetotal.innerText;
      const previusbalancetotaltex = parseFloat(previusbalancetotal);
      const newbalancetotal = previusbalancetotaltex + newdepositammount;
      balancetotal.innerText = newbalancetotal; 
      depositAmmount.value = '';

    })
    document.getElementById('withdrow').addEventListener('click',function(){
      const withdroAmmount = document.getElementById('totalWithdrow');
      const Withdrow = withdroAmmount.value;
      const newWidthtex = parseFloat(Withdrow);
      
      const withdrowBalance = document.getElementById('tutalithdrow');
      const withdrowAmmount = withdrowBalance.innerText;
      const newWithdrow = parseFloat(withdrowAmmount);
      const newWithdrowammount = newWithdrow + newWidthtex ;
      withdrowBalance.innerText = newWithdrowammount;
      withdroAmmount . value = '' ;

    })