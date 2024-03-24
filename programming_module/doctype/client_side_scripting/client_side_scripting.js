// Copyright (c) 2024, Yats and contributors
// For license information, please see license.txt


// --------------------DOCTYPE EVENTS--------------



// frappe.ui.form.on('Client SIde Scripting', {
// 	// refresh: function(frm) {
// 	// 	frappe.msgprint("Hello Yats")
// 	// 	// frappe.throw("This is an error")
// 	// }

// 	// onload : function(frm){
// 	// 	frappe.msgprint("hello yats from onload function")
// 	// }

// 	// validate : function(frm){
// 	// 	frappe.throw("hello yats from validate event")
// 	// }

// 	// before_save : function(frm){
// 	// 	frappe.throw("hello yats from before save function")
// 	// }

// 	// after_save : function(frm){
// 	// 	frappe.throw("hello yats from after save function")
// 	// }

// 	// enable : function(frm){
// 	// 	frappe.msgprint("hello yats from age fieldname event")
// 	// }

// 	// family_member_on_form_rendered: function(frm){
// 	// 	frappe.msgprint("hello yats from family member render event")
// 	// }

// 	// before_submit : function(frm){
// 	// 	frappe.msgprint("hello yats from before submit events")
// 	// }

// 	// on_submit:function(frm){
// 	// 	frappe.msgprint("hello yats from after submit event")
// 	// }

// 	// before_cancel:function(frm){
// 	// 	frappe.throw("hello yats from before cancel event")
// 	// }

// 	// after_cancel:function(frm){
// 	// 	frappe.msgprint("hello yats from after cancel event")
// 	// }
// });


// ------------------------CHILD DOCTYPE EVENTS---------------------


// frappe.ui.form.on(`Family Member`,{
// 	// name1:function(frm){
// 	// 	frappe.msgprint("hello yats from name1 event")
// 	// }

// 	age:function(frm){
// 		frappe.msgprint("hello yats from child doc ,age event")
// 	}
// })



// ----------------------VALUE FETCHING-----------------------------


// We use (frm.doc.first_name) to fetch values


// frappe.ui.form.on('Client SIde Scripting',{

// 	after_save:function(frm){
// 		frappe.msgprint(__("The full name is '{0}'",
// 			[frm.doc.first_name+" "+frm.doc.last_name]
// 		))
		
// 		for(let row of frm.doc.family_member){
// 			frappe.msgprint(__("{0} the family member name is {1} , Age is {2} , Relation is {3}",
// 			[row.idx,row.name1,row.age,row.relation]
// 			))
// 		}
// 	}

	
// })



// -------------------SET INTRO & IS NEW--------------------------




// frappe.ui.form.on('Client SIde Scripting',{
// 	refresh:function(frm){
// 		// frm.set_intro("Now I can create new doctype intro")

// 		if(frm.is_new()){
// 			frm.set_intro("Now I can create new doctype intro")
// 		}
// 	}
// })




// --------------------frm.set_value---------------------



// frappe.ui.form.on('Client SIde Scripting',{
// 	validate:function(frm){
// 		frm.set_value('full_name',frm.doc.first_name+" "+frm.doc.last_name)

// 		// --------------add_child----------------------

// 		let row=frm.add_child('family_member',{
// 			name1:'yats',
// 			age:22,
// 			relation:'father'
// 		})
// 	}
// })




// ---------------------------set_df_property(TO CHANGE DOCFIELD PROPERTIES)----------------------------------



// frappe.ui.form.on('Client SIde Scripting',{
// 	enable:function(frm){
// 		frm.set_df_property('first_name','reqd',1)
// 		frm.set_df_property('last_name','read_only',1)
// 		frm.toggle_reqd('email',true)
// 	}
// })






// -----------------------CUSTOM BUTTONS---------------------------------------




frappe.ui.form.on('Client SIde Scripting',{
	// refresh:function(frm){
	// 	frm.add_custom_button('Custom Button',()=>{
	// 		frappe.msgprint("This is your new custom button")
	// 	})
	// }


	// ---------------_DROP DOWN BUTTON------------------------

	refresh:function(frm){
		frm.add_custom_button('Custom Button 1',()=>{
			frappe.msgprint(__("This is button 1"))
		},'Custom Button')

		frm.add_custom_button('Custom Button 2',()=>{
			frappe.msgprint(__("This is button 2"))
		},'Custom Button')
	}
})