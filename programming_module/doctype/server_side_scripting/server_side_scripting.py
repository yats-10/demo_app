# Copyright (c) 2024, Yats and contributors
# For license information, please see license.txt

import frappe
from frappe import _
from frappe.model.document import Document

class ServerSideScripting(Document):
	


	# -----------------------EVENTS--------------------------------------


	# def validate(self):
	# 	frappe.msgprint("hello frappe")
    
	# def before_save(self):
	# 	frappe.msgprint("hello from before save event")
    
	# def before_insert(self):
	# 	frappe.throw("hello from before insert event")

	# def after_insert(self):
	# 	frappe.throw("hello from after insert event")
    
	# def on_update(self):
	# 	frappe.throw("hello from onupdate event")
    
	# def before_submit(self):
	#  	frappe.throw("hello from before submit event")
    
	# def on_submit(self):
	# 	frappe.throw("hello from onsubmit event")
    
	# def on_cancel(self):
	# 	frappe.throw("hello from on cancel event")
    
	# def on_trash(self):
	# 	frappe.throw("hello from on trash event")
    
	# def after_delete(self):
	# 	frappe.msgprint("hello from after delete event")
    




	def validate(self):
		
		


	#------------------------------VALUE FETCHING------------------------------------------
    



			# self.get_document()
		# frappe.msgprint(_("the full name is {0}").format(
		# 	self.first_name+" "+self.last_name
		# ))

		# for row in self.get("family_member"):
		# 	frappe.msgprint(_("{0} The family member name is {1} and relation is {2}").format(
		# 		row.idx,row.name1,row.relation
		# 	))
	


	# ------------------------Fetching Doc using frappe.get_doc(doctype,name)-----------------------------------------



		
	# def get_document(self):
	# 	doc=frappe.get_doc("Client SIde Scripting" , self.client_side_doc)
	# 	frappe.msgprint(_("The first name is {0} and the age is {1}").format(
	# 		doc.first_name ,doc.age
	# 	))

	# 	for row in doc.get("family_member"):
	# 		frappe.msgprint(_("The family member name is {0} and the age is {1} and the relation is bro{2}").format(
	# 			row.name1,row.age,row.relation
	# 		))




	# -----------------------------New doc and Delete doc--------------------------
	#------------------using new_doc and delete_doc---------------------------------------

		# self.new_document()
	# def new_document(self):
	# 	doc=frappe.new_doc('Client SIde Scripting')
	# 	doc.first_name='yats'
	# 	doc.last_name='op'
	# 	doc.age='21'

	# 	doc.append('family_member',{
	# 		'name1':'sanchit',
	# 		'relation':'bro',
	# 		'age':'20'
	# 	})

	# 	doc.insert()
	# 	some escape hatches that can be used to skip certain checks
	# doc.insert(
		# ignore_permissions=True, # ignore write permissions during insert
		# ignore_links=True, # ignore Link validation in the document
		# ignore_if_duplicate=True, # dont insert if Duplicate EntryError is thrown
		# ignore_mandatory=True # insert even if mandatory fields are not set
		# )

	# 	frappe.delete_doc('Client SIde Scripting','PR-0007')






# -----------------------------frappe.doc.save(to save doc)-------------------------------
		


# same as doc.insert but just to save doc
# doc.save(
# ignore_permissions=True, # ignore write permissions during insert
# ignore_version=True # do not create a version record)
		


#------------------------------doc.set(to set or add values)-------------------------


	# 	self.db_set_document ( )
	# def db_set_document (self):
	# 	doc = frappe.get_doc('Client Side Scripting', 'PR-0012')
	# 	doc.db_set('age', 45)
		pass